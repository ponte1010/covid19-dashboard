import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGetCountry } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCoutry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const countries = [
    "Japan",
    "China",
    "US",
    "France",
    "Italy",
    "Spain",
    "United Kingdom",
    "Germany",
    "Russia",
    "Brazil",
    "Taiwan",
    "Thailand",
    "New Zealand",
    "Sweden",
    "India",
  ];

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetCountry(e.target.value))
        }
      >
        <option value="">Worldwide</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCoutry;
