import React from "react";
import ListsContainer from "../list/ListsContainer";

function Board(props) {
  return (
    <React.Fragment>
      <header>
        <ul>
          <li id="title">{props.board.title}</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
      <main>
        <div id="list-container" className="list-container">
          <ListsContainer boardId={props.board.id} />
          <div id="new-list" className="new-list">
            <span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
              <input type="submit" className="button" value="Save" />
              <i className="x-icon icon"></i>
            </div>
          </div>
        </div>
      </main>
      <div className="menu-sidebar">
        <div id="menu-main" class="main slide">
          <i class="back-icon icon"></i>
          <i class="x-icon icon"></i>
          <h1>Menu</h1>
          <div class="menu-contents">
            <div class="members">
              <div class="member-container">
                <div class="card-member ">VR</div>
              </div>
              <div class="member-container">
                <div class="card-member admin">TP</div>
              </div>
              <div class="member-container">
                <div class="card-member ">KW</div>
              </div>
            </div>
            <div class="add-members">
              <i class="add-icon sm-icon"></i>Add Members...
            </div>
            <hr />
            <ul class="menu-list">
              <li class="background-item">Change Background</li>
              <li class="filter-icon menu-icon">Filter Cards</li>
              <li class="power-icon menu-icon not-implemented">Power-Ups</li>
              <li class="stickers-icon menu-icon not-implemented">Stickers</li>
              <li class="more-icon menu-icon">More</li>
              <hr />
              <li class="activity-icon menu-icon not-implemented">Activity</li>
            </ul>
            <ul class="activity-list">
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>yesterday at 4:53 PM</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> sent{" "}
                  <span class="link">
                    Use the + in the top menu to make your first board now.
                  </span>{" "}
                  to the board <small>4 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> archived{" "}
                  <span class="link">
                    Use the + in the top menu to make your first board now.
                  </span>{" "}
                  <small>4 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>5 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>6 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>yesterday at 10:23 PM</small>
                </p>
              </li>
            </ul>
            <a class="all-activity not-implemented">View all activity...</a>
          </div>
        </div>
      </div>
      <div id="modal-container"></div>
      <div id="dropdown-container"></div>
    </React.Fragment>
  );
}

export default Board;
