import {
  Breadcrumbs,
  Container,
  Link as MaterialLink,
  Box,
  Grid,
  Typography,
  GridList,
  GridListTile,
  Button
} from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';

export default function Home() {
  return (
    <Container disableGutters>
      <Box p={6}>
        <Grid justify="space-between" container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Box className={styles.breadcrumbs}>
              <Breadcrumbs separator={<Box color="primary.main">›</Box>} aria-label="breadcrumb">
                <Link href="/shop" passHref>
                  <MaterialLink color="textPrimary" underline="none">
                    Recipes
                  </MaterialLink>
                </Link>
                <Link href="/shop" passHref>
                  <MaterialLink color="textPrimary" underline="none">
                    Bread
                  </MaterialLink>
                </Link>
                <Link href="/shop" passHref>
                  <MaterialLink color="textPrimary" underline="none">
                    Quick bread
                  </MaterialLink>
                </Link>
                <div></div>
              </Breadcrumbs>
            </Box>
            <Box mb={10}>
              <Typography variant="h3" as="h1">
                Whole-Grain Banana Bread
              </Typography>
            </Box>
            <Typography variant="body1">
              Lorem ipsum dolor{' '}
              <Link href="/" passHref>
                <MaterialLink>sit</MaterialLink>
              </Link>{' '}
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
            <Box mt={3} borderBottom={1} pb={3} className={styles['short-info-and-actions']}>
              <Grid container>
                <Grid item>
                  <Box mr={1}>
                    <Image src={'/images/timer.svg'} width="55px" height="55px" alt="" />
                  </Box>
                </Grid>
                <GridList cols={1} cellHeight="auto">
                  <GridListTile>
                    <Typography variant="caption" display="block">
                      PREP
                    </Typography>
                  </GridListTile>
                  <GridListTile>
                    <Typography variant="body1" display="block">
                      10 mins
                    </Typography>
                  </GridListTile>
                </GridList>
                <GridList cols={1} cellHeight="auto">
                  <GridListTile>
                    <Typography variant="caption" display="block">
                      BAKE
                    </Typography>
                  </GridListTile>
                  <GridListTile>
                    <Typography variant="body1" display="block">
                      10 mins to 1hr 10 mins
                    </Typography>
                  </GridListTile>
                </GridList>
                <GridList cols={1} cellHeight="auto">
                  <GridListTile>
                    <Typography variant="caption" display="block">
                      TOTAL
                    </Typography>
                  </GridListTile>
                  <GridListTile>
                    <Typography variant="body1" display="block">
                      1hr
                    </Typography>
                  </GridListTile>
                </GridList>
              </Grid>
            </Box>
            <Box mt={3}>
              <Grid container>
                <Grid item>
                  <Box mr={1}>
                    <Image src={'/images/timer.svg'} width="55px" height="55px" alt="" />
                  </Box>
                </Grid>
                <Grid item xs>
                  <GridList cols={1} cellHeight="auto">
                    <GridListTile>
                      <Typography variant="caption" display="block">
                        YIELD
                      </Typography>
                    </GridListTile>
                    <GridListTile>
                      <Typography variant="body1" display="block">
                        1 loaf, 12 generous servings
                      </Typography>
                    </GridListTile>
                  </GridList>
                </Grid>
                <Grid item container xs={6} justify="space-between">
                  <Grid item>
                    <Button
                      color="secondary"
                      size="small"
                      variant="outlined"
                      startIcon={
                        <Image src={'/images/timer.svg'} width="16px" height="16px" alt="" />
                      }>
                      <Typography variant="caption">Save recipe</Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      color="secondary"
                      size="small"
                      variant="outlined"
                      startIcon={
                        <Image src={'/images/timer.svg'} width="16px" height="16px" alt="" />
                      }>
                      <Typography variant="caption">Print</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={'/images/bread.jpg'}
              width="100%"
              height="auto"
              layout="responsive"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
