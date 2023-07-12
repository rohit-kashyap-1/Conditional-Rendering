import React from 'react'
import Item from './Item'

export default function Products() {
  return (
    <div>
        <h1>List of products</h1>
        <Item title="Logitech keyboard" description="Logitech gaming keyboard " price={2555} />
    </div>
  )
}
