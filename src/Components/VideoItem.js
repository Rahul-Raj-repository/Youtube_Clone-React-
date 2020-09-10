import React from 'react'
import {Grid, Paper, Typography} from "@material-ui/core"

function VideoItem({video, onVideoSelect}) {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} style={{display: "flex", alignItems: "center", cursor:"pointer"}}
             onClick={()=>onVideoSelect(video)}>
                <img className="img-responsive" style={{marginRight: "10px"}} alt="thumbnail"
                src={video.snippet.thumbnails.medium.url} height="130px" width="210px"/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem
