import {Button, Card, CardHeader, Grid, makeStyles} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom";
import {CharacterProfile} from "../components/CharacterProfile";


const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 135px)',
    }
})

function Main () {


    const classes = useStyles()



    return< Grid container className={classes.root} spacing={3} >
      <Grid item>
        <Card>
            <CardHeader title='Characters'/>
            <CardMedia >
                <Button component={Link} to={`/allCharacter`}>
                    push
                </Button>
            </CardMedia>
        </Card>
      </Grid>
      <Grid item>
          <Card>
              <CardHeader title='Episode'/>
              <CardMedia >
                <Button component={Link} to={`/allEpisode`}>
                    push
                </Button>
              </CardMedia>
          </Card>
      </Grid>
      <Grid item>
          <Card>
              <CardHeader title='Location'/>
              <CardMedia >
                  <Button component={Link} to={`/allLocation`}>
                      push
                  </Button>
              </CardMedia>
          </Card>
      </Grid>
    </Grid>
}
export {Main}