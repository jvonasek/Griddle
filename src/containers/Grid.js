import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Cell from '../components/Cell';
import { toggleCells, openDialog } from '../actions/';
import { getCells, getXSize } from '../reducers/';

const Grid = ({ cells, xSize, onClickHandler, openDialog }) => (
  <div className="Grid clearfix">
    <button onClick={openDialog}>open dialog</button>
    <hr />
    {
      cells.map((cell) => (
        <Cell width={100 / xSize} key={`${cell.x}-${cell.y}`} cell={cell} onClickHandler={onClickHandler} />
      ))
    }
  </div>
);

Grid.propTypes = {
  cells: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  xSize: PropTypes.number,
};

Grid.defaultProps = {
  xSize: 8,
};

const mapStateToProps = (state) => ({
  cells: getCells(state),
  xSize: getXSize(state),
});

export default connect(
  mapStateToProps,
  {
    onClickHandler: toggleCells,
    openDialog
  }
)(Grid);


//cells={grid.cells} xSize={grid.xSize} ySize={grid.ySize} {...this.actions}
