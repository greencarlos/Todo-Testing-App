import React from 'react'
import {useSelector} from 'react-redux'
import DeleteExercise from './DeleteExercise'

const ViewExercises = () => {
  const exercises = useSelector((state) => state.exercises.exercises)

  return (
    <>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <p>{`${exercise.type} - ${exercise.duration} minutes - ${exercise.calories} kcal`}</p>
          <DeleteExercise id={exercise.id} />
        </div>
      ))}
    </>
  )
}

export default ViewExercises
