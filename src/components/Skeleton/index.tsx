import { Card, CardActionArea, CardContent, CardHeader, Divider, Grid, Skeleton } from '@mui/material'
import { SkeletonType } from 'src/lib/interfaces'
import React from 'react'

const Skeletons = ({ type }: SkeletonType) => {
  const desc = ['10%', '90%', '60%', '75%', '90%', '85%', '100%', '60%', '75%', '90%', '85%']
  const contDesc = ['90%', '60%', '75%', '90%', '85%']

  return (
    <>
      {type === 'textLarge' && <Skeleton variant="rounded" width={500} height={100} sx={{ margin: 1 }} />}
      {type === 'text' && <Skeleton variant="text" width={300} sx={{ margin: 1 }} />}
      {type === 'image' && <Skeleton variant="rounded" width={250} height={250} sx={{ margin: 1 }} />}
      {type === 'iconSmall' && <Skeleton variant="rounded" width={30} height={30} sx={{ margin: 1 }} />}
      {type === 'aboutDesc' && desc.map((v) => <Skeleton key={v} variant="text" sx={{ marginY: 3, width: v }} />)}
      {type === 'contDesc' && contDesc.map((v) => <Skeleton key={v} variant="text" sx={{ marginY: 1, width: v }} />)}
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
    </>
  )
}

export default Skeletons
