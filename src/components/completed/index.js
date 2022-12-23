import React from 'react'

const Completed = (props) => {

const {each} = props;

  return (
    <><li className='list2'>{each.task}</li></>
  )
}

export default Completed