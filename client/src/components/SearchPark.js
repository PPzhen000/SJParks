import React, { Component } from 'react';
import styled from 'styled-components';
import ParkLi from './ParkLi';
import Input from './UI/Form/Input';
import ButtonText from './UI/Generic/ButtonText';

const Container = styled.div`
  .innerWrapper {
    padding: 20px;
    max-width: 300px;
    margin: 0 auto;
    overflow-y: scroll;
    height: inherit;
  }
`;

class SearchPark extends Component {
  state = { filter: '', filterPark: null };

  handleInput = e => {
    const { name, value } = e.target;
    const filterPark = this.props.parks.filter(el =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ [name]: value, filterPark });
  };

  render() {
    const { filter, filterPark } = this.state;
    const { addPark, parks, selected, addAllParks } = this.props;

    let showParkList = filterPark || [...parks].splice(0, this.props.numShow || 5);

    const parkLi = showParkList.map(el => (
      <ParkLi
        key={el._id}
        park={el}
        selected={selected}
        clicked={() => addPark(el)}
      />
    ));

    return (
      <Container className='searchContainer'>
      <div className='innerWrapper'>
        <Input
          name='filter'
          value={filter}
          onChange={this.handleInput}
          type='text'
          placeholder='Search Parks by Name'
          autoComplete='off'
        />

        {addAllParks && (
          <ButtonText onClick={addAllParks}>Select All</ButtonText>
        )}

        <ul>{parkLi}</ul>
        </div>
      </Container>
    );
  }
}

export default SearchPark;
