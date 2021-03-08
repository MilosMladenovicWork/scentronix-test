import React from 'react';
import styles from './index.module.css';
import { Box, Grid, Link as MaterialLink, Container } from '@material-ui/core';
import ActiveLink from '../Link/ActiveLink';

const Navigation = () => {
  return (
    <>
      <Box width={900} mx="auto" pt={2} pb={3} className={styles.navigation}>
        <Grid direction="row" container spacing={6}>
          <Grid item>
            <ActiveLink href="/shop" passHref activeClassName={styles['active-link']}>
              <MaterialLink color="textPrimary" underline="none">
                Shop
              </MaterialLink>
            </ActiveLink>
          </Grid>
          <Grid item>
            <ActiveLink href="/recipes" passHref activeClassName={styles['active-link']}>
              <MaterialLink color="textPrimary" underline="none">
                Recipes
              </MaterialLink>
            </ActiveLink>
          </Grid>
          <Grid item>
            <ActiveLink href="/learn" passHref activeClassName={styles['active-link']}>
              <MaterialLink color="textPrimary" underline="none">
                Learn
              </MaterialLink>
            </ActiveLink>
          </Grid>
          <Grid item>
            <ActiveLink href="/about" passHref activeClassName={styles['active-link']}>
              <MaterialLink color="textPrimary" underline="none">
                About
              </MaterialLink>
            </ActiveLink>
          </Grid>
          <Grid item>
            <ActiveLink href="/blog" passHref activeClassName={styles['active-link']}>
              <MaterialLink color="textPrimary" underline="none">
                Blog
              </MaterialLink>
            </ActiveLink>
          </Grid>
        </Grid>
      </Box>
      <Box width={1} className={styles['secondary-navigation']} bgcolor="primary.mainLight">
        <Box width={900} mx="auto">
          <Grid direction="row" container spacing={3}>
            <Grid item>
              <ActiveLink href="/categories" passHref activeClassName={styles['active-link']}>
                <MaterialLink color="textPrimary" underline="none">
                  Categories
                </MaterialLink>
              </ActiveLink>
            </Grid>
            <Grid item>
              <ActiveLink href="/collections" passHref activeClassName={styles['active-link']}>
                <MaterialLink color="textPrimary" underline="none">
                  Collections
                </MaterialLink>
              </ActiveLink>
            </Grid>
            <Grid item>
              <ActiveLink href="/resources" passHref activeClassName={styles['active-link']}>
                <MaterialLink color="textPrimary" underline="none">
                  Resources
                </MaterialLink>
              </ActiveLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
