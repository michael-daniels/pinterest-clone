import React, { Component } from 'react';

class CreateSongBar extends Component {

  render() {
    return (
      <div className="create-song-bar">
        <input type="text" className="form-control" placeholder="create new song"></input>
      </div>
    );
  }

}

export default CreateSongBar;
