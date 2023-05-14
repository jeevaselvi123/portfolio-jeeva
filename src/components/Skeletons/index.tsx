import { Card, CardActionArea, CardContent, CardHeader, Divider, Grid, Skeleton, Typography } from '@mui/material'
import { SkeletonType } from 'src/lib/interfaces'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab'

const Skeletons = ({ type }: SkeletonType) => {
  const desc = ['10%', '90%', '60%', '75%', '90%', '85%', '100%', '60%', '75%', '90%', '85%']
  const contDesc = ['90%', '60%', '75%', '90%', '85%']

  return (
    <>
      {type === 'textLarge' && <Skeleton variant="rounded" width={500} height={100} sx={{ margin: 1 }} />}
      {type === 'text' && <Skeleton variant="text" width={300} sx={{ margin: 1 }} />}
      {type === 'image' && <Skeleton variant="rounded" width={250} height={250} sx={{ margin: 1 }} />}
      {type === 'blogCardImage' && <Skeleton variant="rounded" height={250} />}
      {type === 'iconSmall' && <Skeleton variant="rounded" width={30} height={30} sx={{ margin: 1 }} />}
      {type === 'aboutDesc' && desc.map((v, i) => <Skeleton key={i} variant="text" sx={{ marginY: 3, width: v }} />)}
      {type === 'contDesc' && contDesc.map((v, i) => <Skeleton key={i} variant="text" sx={{ marginY: 1, width: v }} />)}
      {type === 'blogCard' &&
        [1, 2, 3, 4].map((v) => (
          <Grid item key={v}>
            <Card sx={{ minWidth: 325 }}>
              <CardActionArea disableRipple>
                <Skeleton variant="rounded" height={250} />
              </CardActionArea>

              <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </CardContent>
              <Divider />
              <CardHeader
                avatar={<Skeleton variant="circular" width={40} height={40} />}
                title={<Skeleton variant="text" />}
                subheader={<Skeleton variant="text" width={100} />}
              />
            </Card>
          </Grid>
        ))}
      {type === 'exps' && (
        <Timeline position="alternate">
          {[1, 2, 3].map((v) => (
            <TimelineItem key={v}>
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="#fff">
                <Skeleton variant="text" />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Skeleton variant="circular" width={40} height={40} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }} color="#fff">
                <Skeleton variant="text" />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
      {type === 'skillsCerts' && (
        <Grid container direction="row" spacing={2} justifyContent="center">
          {[1, 2, 3, 5].map((v) => (
            <Grid item key={v}>
              <Skeleton key={v} variant="rounded" width={150} height={150} sx={{ margin: 1 }} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Skeletons
