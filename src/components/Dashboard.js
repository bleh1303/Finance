import React from 'react'
import Logo from './images/Group 23.png';

function Dashboard() {
  return (
<div class="dashboard">
    <nav>
      <ul>
        <li>
          <a><span class="nav-item ">
            <h4>Hello User!</h4>
          </span></a>
</li>
        <li><a href="#">
          <i class="fas fa-menorah"></i>
          <span class="nav-item">Dashboard</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-comment"></i>
          <span class="nav-item">Message</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-database"></i>
          <span class="nav-item">Report</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-cog"></i>
          <span class="nav-item">Settings</span>
        </a></li>

        <li><a href="#" class="logout">
          <i class="fas fa-sign-out-alt"></i>
          <span class="nav-item">Log out</span>
        </a></li>
      </ul>
    </nav>


    <section class="main">
      <div class="main-top">
        <h1>Continue Learning</h1>
        <i class="fas fa-user-cog"></i>
      </div>
      <div class="users">
        <div class="card">
          <img src="./pic/img1.jpg" alt=" "/>
          <h4>Financial woes</h4>
          <p>Level 3</p>
          <div class="per">
            <table>
              <tr>
                <td><span>85%</span></td>
              </tr>
              <tr>
                <td>
                    Ongoing
                </td>
              </tr>
            </table>
          </div>
          <button>Get back to it!</button>
        </div>
        <div class="card">
            <img src="./pic/img1.jpg" alt=" "/>
            <h4>Financial woes</h4>
            <p>Level 3</p>
            <div class="per">
              <table>
                <tr>
                  <td><span>85%</span></td>
                </tr>
                <tr>
                  <td>
                      Ongoing
                  </td>
                </tr>
              </table>
            </div>
            <button>Get back to it!</button>
          </div>
          <div class="card">
            <img src="./pic/img1.jpg" alt=" "/>
            <h4>Financial woes</h4>
            <p>Level 3</p>
            <div class="per">
              <table>
                <tr>
                  <td><span>85%</span></td>
                </tr>
                <tr>
                  <td>
                      Ongoing
                  </td>
                </tr>
              </table>
            </div>
            <button>Get back to it!</button>
          </div>
          <div class="card">
            <img src="./pic/img1.jpg" alt=""/>
            <h4>Financial woes</h4>
            <p>Level 3</p>
            <div class="per">
              <table>
                <tr>
                  <td><span>100%</span></td>
                </tr>
                <tr>
                  <td>
                     Completed
                  </td>
                </tr>
              </table>
            </div>
            <button>Get certificate</button>
          </div>
      </div>

      <section class="status">
        <div class="status-list">
          <h1>Status</h1>
          <table class="table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Hours completed</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>137001</td>
                <td>Financial woes</td>
                <td>Ongoing</td>
                <td>03-24-22</td>
                <td>-</td>
                <td>27/82</td>
                <td><button>View</button></td>
              </tr>
              <tr class="active">
                <td>137001</td>
                <td>Financial woes</td>
                <td>Ongoing</td>
                <td>03-24-22</td>
                <td>05-13-22</td>
                <td>54/54</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>137001</td>
                <td>Financial woes</td>
                <td>Ongoing</td>
                <td>03-24-22</td>
                <td>-</td>
                <td>27/82</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>137001</td>
                <td>Financial woes</td>
                <td>Ongoing</td>
                <td>03-24-22</td>
                <td>-</td>
                <td>27/82</td>
                <td><button>View</button></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </div>
  )
}

export default Dashboard