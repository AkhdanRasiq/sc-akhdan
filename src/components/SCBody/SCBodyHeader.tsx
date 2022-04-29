import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { ICategoryProps, ICategoryState } from "../../utils/SCInterface"


function SCBodyHeader({ a_arrCategories }: ICategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState('')

  // useEffect(() => {
  //   setSelectedCategory(a_arrCategories[0].id.toString())
  // }, [a_arrCategories])

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string)
    console.log(selectedCategory)
  }

  return (
    <div className="bodyHeaderContainer">
      <div className="bodyHeaderContent">
        <h2>Explore</h2>
        <TextField sx={{ marginTop: "25px" }} id="outlined-basic" label="Search" variant="outlined" fullWidth disabled={selectedCategory != '' ? false : true}/>

        <div className="bodyHeaderContentFilter">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={selectedCategory}
                value={selectedCategory}
                label="Categories"
                onChange={handleChange}
              >
                {a_arrCategories.map((item: ICategoryState) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default SCBodyHeader
