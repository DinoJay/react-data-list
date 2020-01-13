import React, { useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import styles from './styles.css'

export default function DataList(props) {
  const {children, listClassName, listStyle, className, style} = props
  const [open, setOpen] = useState(false)
  const [bbox, setBbox] = useState({x: 0, y: 0})
  const refInput = React.useRef(null)

  const getBBox = () =>
    refInput.current
      ? refInput.current.getBoundingClientRect()
      : {x: 0, y: 0, width: 0, height: 0}

  const list = <ul
    style={{

      width: getBBox().width - 4,
      listStyle: 'none',
      marginBlockStart: 0,
      marginBlockEnd: 0,
      // margin-inline-start: 0px;
      // margin-inline-end: 0px;
      paddingInlineStart: 0,

      position: 'absolute',
      left: getBBox().x,
      top: getBBox().y + getBBox().height,
      display: !open && 'none',
      margin: 0,
      marginTop: 4
    }}>
    <div className={listClassName} style={listStyle}>
      {
        React.Children.map(children, d => <li>{d}</li>)
      }
    </div>
  </ul>

  const renderedList = ReactDOM
    .createPortal(list, document.querySelector('body'))

  return (
    <div style={{padding: 10}}>
      <input
        ref={refInput}
        style={{border: '2px solid black', padding: '10px'}}
        onFocus={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      />
      {renderedList}
    </div>
  )
}
