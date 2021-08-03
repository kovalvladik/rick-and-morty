import {Container, makeStyles} from "@material-ui/core";
import {getAllCharacters} from '../api'
import {CharacterList} from "../components/CharacterList";
import {EpisodeList} from "../components/EpisodeList";
import {LocationList} from "../components/LocationList";

const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 135px)',
    }
})

function Main () {


    const classes = useStyles()



    return<Container className={classes.root}>
      <CharacterList/>
        <EpisodeList/>
        <LocationList/>
    </Container>
}
export {Main}