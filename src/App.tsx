import NumberButton from './numberButton'
import CalTextArea from './textarea'
import Grid from '@mui/material/Grid';
import { green } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { orange } from '@mui/material/colors';

function JavascriptCalculator() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Grid container  >
            <Grid item xs={12}>
              <CalTextArea />
            </Grid>
            <Grid item xs={6}>
              <NumberButton numbers={"AC"} backgroundColor={orange[300]}/>
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"/"} backgroundColor={grey[600]} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"*"} backgroundColor={grey[600]} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"7"} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"8"} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"9"} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"-"} backgroundColor={grey[600]} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"4"} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"5"} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"6"} />
            </Grid>
            <Grid item xs={3}>
              <NumberButton numbers={"+"} backgroundColor={grey[600]} />
            </Grid>

            <Grid container>
              <Grid item xs={9}>
                <Grid container>
                  <Grid item xs={4}>
                    <NumberButton numbers={"1"} />
                  </Grid>
                  <Grid item xs={4}>
                    <NumberButton numbers={"2"} />
                  </Grid>
                  <Grid item xs={4}>
                    <NumberButton numbers={"3"} />
                  </Grid>
                  <Grid item xs={8}>
                    <NumberButton numbers={"0"} />
                  </Grid>
                  <Grid item xs={4}>
                    <NumberButton numbers={"."} />
                  </Grid>
                </Grid>

              </Grid>
              <Grid item xs={3} >
                <NumberButton numbers={"="} backgroundColor={green[600]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  )
}

export default JavascriptCalculator