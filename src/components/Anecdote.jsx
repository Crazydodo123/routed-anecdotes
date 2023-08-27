import { useParams } from "react-router-dom"

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>has {anecdote.votes} votes</p>
      <p>for more info see <a href={anecdote.info} target='_blank'>{anecdote.info}</a></p>
    </div>
  )
}

export default Anecdote