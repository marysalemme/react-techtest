import React, { Component } from 'react';

import Teaser from 'presentational/Teaser';
import Button from 'presentational/Button';
import { Grid, Col, Row } from 'presentational/Grid';

import classNames from 'classnames';
import style from 'components/Teasers.scss';
import navFlex from 'shared/flex.scss';
import bootstrap from 'vendor/bootstrap/_bootstrap_custom.scss';
/**
 * <Teasers /> component.
 */
class Teasers extends Component {
  /**
   * Renders the Teasers component.
   *
   * @return {JSX} - rendered Teasers page.
   */
  render() : React.Element<*> {
    return (
      <div className = { style.teasers } >
        <Grid>
          <nav className = { classNames([navFlex.navFlex]) } >
            <Row>
              {teasers.items.map(info =>
                <Col key = { info.nid } colXs = { 7 } colSm = { 5 } colMd = { 3 } colLg = { 3 } >
                  <Teaser key = { info.nid } carType = { info.carType } teaserTitle = { info.teaserTitle } rating = { info.rating } teaserCopy = { info.teaserCopy } image = { info.image } />
                  <Button buttonClass = { classNames([bootstrap.btn, bootstrap.btnPrimary]) } buttonText = 'Vote this review' data-elemId = { info.nid } />
                </Col>
              )}
            </Row>
          </nav>
        </Grid>
      </div>
    );
  }
}

export default Teasers;

const teasers = {
  type: 'REVIEWS',
  items: [{
    nid: 1,
    carType: 'Mercedes',
    teaserTitle: 'New Mercedes A-Class Saloon – everything you need to know',
    path: '/advice/title-article-1',
    teaserCopy: '<p>The Mercedes Concept A previews next year’s A-Class Saloon and the fourth-generation A-Class hatchback. Here\'s what to expect...</p>',
    image: {
      'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/fa3a848996a565dc7a06b6ac4f63ea82f50a18ec.jpg',
      'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/fa3a848996a565dc7a06b6ac4f63ea82f50a18ec.jpg',
    },
    rating: 3
  },
  {
    nid: 2,
    carType: 'Volkswagen',
    teaserTitle: 'New Volkswagen ID Crozz concept previews electric SUV',
    path: '/advice/title-article-2',
    teaserCopy: '<p>Volkswagen has revealed details of its latest ID concept car ahead of its launch at the Shanghai motor show.</p>',
    image: {
      'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/339ff94be29c8224fddf5b54463f8546aa21325b.jpg',
      'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/339ff94be29c8224fddf5b54463f8546aa21325b.jpg',
    },
    rating: 5
  },
  {
    nid: 345,
    carType: 'Citroën',
    teaserTitle: 'Citroën C5 Aircross to launch next year',
    path: '/advice/title-article-3',
    teaserCopy: '<p>BMW\'s new 5 Series saloon scores highly in safety tests, but the Fiat Doblo people carrier disappoints.</p>',
    image: {
      'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/8c0cd2a7c3cebf10e7d909792f4e2ccb71972bd2.jpg',
      'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/8c0cd2a7c3cebf10e7d909792f4e2ccb71972bd2.jpg',
    },
    rating: 4
  },
  {
    nid: 5690,
    carType: 'Skodas',
    teaserTitle: 'Details of Skodas first ever electric car revealed',
    path: '/advice/title-article-4',
    teaserCopy: '<p>The May issue of What Car? magazine is now on sale; all this and more inside.</p>',
    image: {
      'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/f4f4b7f05796733e3a9a1017ef78e4f3d58114ae.jpg',
      'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/f4f4b7f05796733e3a9a1017ef78e4f3d58114ae.jpg',
    },
    rating: 1
  }]
};
