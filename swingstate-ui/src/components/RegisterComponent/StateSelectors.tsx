import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

{/*Do not confuse state in the const with state in the US.  state and setState are referring to 
the state of the selection slider, not the state in the United States.*/}
export default function SwitchLabels() {
    const [state, setState] = React.useState({
      checkedAL: false,
      checkedAZ: false,
      checkedCO: false,
      checkedGA: false,
      checkedIA: false,
      checkedKS: false,
      checkedME: false,
      checkedMI: false,
      checkedMT: false,
      checkedND: false,
    });

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return(
        <FormGroup row>
            <FormControlLabel
                control={<Switch checked={state.checkedAL} onChange={handleChange} name="checkedAL" />}
                label="Alabama"/>
            <FormControlLabel
                control={<Switch checked={state.checkedAZ} onChange={handleChange} name="checkedAZ" color="primary" />}
                label="Arizona"/>
            <FormControlLabel
                control={<Switch checked={state.checkedCO} onChange={handleChange} name="checkedCO" />}
                label="Colarado"/>
            <FormControlLabel
                control={<Switch checked={state.checkedGA} onChange={handleChange} name="checkedGA" color="primary" />}
                label="Georgia"/>
            <FormControlLabel
                control={<Switch checked={state.checkedIA} onChange={handleChange} name="checkedIA" />}
                label="Iowa"/>

            <FormControlLabel
                control={<Switch checked={state.checkedKS} onChange={handleChange} name="checkedKS" color="primary" />}
                label="Kansas"/>
            <FormControlLabel
                control={<Switch checked={state.checkedME} onChange={handleChange} name="checkedME" />}
                label="Maine"/>
            <FormControlLabel
                control={<Switch checked={state.checkedMI} onChange={handleChange} name="checkedMI" color="primary" />}
                label="Michigan"/>
            <FormControlLabel
                control={<Switch checked={state.checkedMT} onChange={handleChange} name="checkedMT" />}
                label="Montana"/>
            <FormControlLabel
                control={<Switch checked={state.checkedND} onChange={handleChange} name="checkedND" color="primary" />}
                label="North Carolina"/>
        </FormGroup>
    );
}