import React from 'react'

const page = ({ params }: { params: { tasks: string } }) => {
  return (
    <div>
      {params.tasks}
    </div>
  )
}

export default page
