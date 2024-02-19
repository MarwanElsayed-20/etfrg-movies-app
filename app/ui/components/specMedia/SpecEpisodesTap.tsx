"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Loading from "@/app/loading";
import { getData } from "@/app/lib/utils/api";
import TvReviews from "./TvReviews";
import EpisodeSlider from "./EpisodeSlider";

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, paddingLeft: "0", paddingRight: "0" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SpecEpisodesTap({
  tvDetailsData,
  tvReviewsData,
  pathName,
}: {
  tvDetailsData: any;
  tvReviewsData: any;
  pathName: any;
}) {
  const [value, setValue] = React.useState(0);
  const [season, setSeason] = React.useState("");
  const [seasonData, setSeasonData] = React.useState<any>([]);
  const [seasonNum, setSeasonNum] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  const handleTapChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleSelectChange = async (event: any) => {
    setSeason(event.target.value);
    setSeasonNum(event.target.value);
  };
  console.log(seasonData);

  React.useEffect(() => {
    let getSeasonData = async () => {
      setLoading(true);

      const getTvSeasonData: any = await getData({
        endPoint: `tv`,
        params: `${pathName}/season/${seasonNum}?language=en-US`,
      });

      setSeasonData(getTvSeasonData);
      setLoading(false);
    };

    getSeasonData();
  }, [seasonNum]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleTapChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#00925d" },
          }}
        >
          <Tab
            label="Episode"
            sx={{
              color: "#9ca4ab",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "capitalize",
              paddingLeft: "0",
              "&.Mui-selected": { color: "#fff" },
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="Reviews"
            sx={{
              color: "#9ca4ab",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "capitalize",
              "&.Mui-selected": { color: "#fff" },
            }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      {loading ? (
        <Loading height="h-screen" />
      ) : (
        <CustomTabPanel value={value} index={0}>
          <div className="flex gap-6 flex-col">
            <div className="flex justify-between items-center">
              <h4 className=" text-2xl font-bold text-white">
                1-
                {seasonData?.episodes.length > 0
                  ? seasonData.episodes.reduce((acc: any, cur: any) => {
                      return (acc =
                        acc > cur.episode_number ? acc : cur.episode_number);
                    }, 0)
                  : ""}{" "}
                Episode
              </h4>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={season}
                    onChange={handleSelectChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#28262d",
                        },
                        "&:hover fieldset": {
                          borderColor: "#00925d", // Set the hover effect color for the outlined input
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#00925d", // Set the border color when the input is focused
                        },
                      },
                      "& .MuiSelect-icon": { color: "#fff" },
                      color: "#fff",
                      fontStyle: "none",
                    }}
                  >
                    <MenuItem disabled value="">
                      Seasons
                    </MenuItem>
                    {tvDetailsData.seasons.map((season: any) => (
                      <MenuItem key={season.id} value={season.season_number}>
                        {season.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            {seasonData?.episodes.length > 0 ? (
              <EpisodeSlider data={seasonData} />
            ) : (
              ""
            )}
          </div>
        </CustomTabPanel>
      )}

      <CustomTabPanel value={value} index={1}>
        <TvReviews data={tvReviewsData} />
      </CustomTabPanel>
    </Box>
  );
}
