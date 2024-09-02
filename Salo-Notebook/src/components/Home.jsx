import Notes from './Notes';

const Home = () => {


  return (
    <div>
      <div className='container my-3'>
        <h2>Add Notes</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">Title</label>
            <input type="text" className="form-control" id="titleInput" aria-describedby="titleHelp" />
            <div id="titleHelp" className="form-text">Enter the title for your note.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionInput" className="form-label">Description</label>
            <textarea className="form-control" id="descriptionInput" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>



        <Notes />
      </div>
    </div>
  )
}

export default Home
