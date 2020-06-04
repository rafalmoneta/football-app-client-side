export const positionOptions = [
  {value: 'GK', label: 'Goalkeeper'},
  {value: 'RB', label: 'Right Back'},
  {value: 'CB', label: 'Center Back'},
  {value: 'LB', label: 'Left Back'},
  {value: 'RWB', label: 'Right Wing Back'},
  {value: 'LWB', label: 'Left Wing Back'},
  {value: 'CDM', label: 'Center Defensive Midfielder'},
  {value: 'CM', label: 'Center Midfielder'},
  {value: 'CAM', label: 'Center Attacking Midfielder'},
  {value: 'RM', label: 'Right Midfielder'},
  {value: 'LM', label: 'Left Midfielder'},
  {value: 'RW', label: 'Right Wing'},
  {value: 'LW', label: 'Left Wing'},
  {value: 'CF', label: 'Center Forward'},
  {value: 'ST', label: 'Striker'}
]


//styles for Select components
export const customStyles = {
  container: (provided) => ({
    ...provided,
    marginTop: "1rem",
    height: "3rem",
    flexBasis: '14rem',
    marginRight: '1rem'
  }),
  control: (provided) => ({
    ...provided,
    height: "100%"
  })
}