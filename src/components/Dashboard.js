import React from 'react'
import Logo from './images/Group 23.png';
import bank from './images/bank.webp';
import invest from './images/invest.jpg';
import loan from './images/loan.webp';
import risk from './images/risk.webp';

function Dashboard() {
  return (
<div class="dashboard">
 

    

    <section class="main">
      <div class="main-top">
        <h1>Continue Learning</h1>
        <i class="fas fa-user-cog"></i>
      </div>
      <div class="users">
        <div class="card">
        <img class="imge"  src={invest} />
          <h4>How To Get Started On Investments</h4>
          <p>Level 3</p>
          <div class="per">
            <table>
              <tr>
                <td><span>14%</span></td>
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
        <img class="imge"  src={bank} />
            <h4>The Fundamentals Of Banking</h4>
            <p>Level 3</p>
            <div class="per">
              <table>
                <tr>
                  <td><span>55%</span></td>
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
          <img class="imge"  src={risk} />
            <h4>Risk Management And Insurance</h4>
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
            <button>Get back to it!</button>
          </div>
          <div class="card">
          <img class="imge"  src={loan} />
            <h4>How To Clear Off Your Loans</h4>
            <p>Level 3</p>
            <div class="per">
              <table>
                <tr>
                  <td><span>33%</span></td>
                </tr>
                <tr>
                  <td>
                     Ongoing
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
                <td>How To Get Started On Investments</td>
                <td>Ongoing</td>
                <td>17-24-22</td>
                <td>-</td>
                <td>12/82</td>
                <td><button>View</button></td>
              </tr>
              <tr class="active">
                <td>137010</td>
                <td>Risk Management And Insurance</td>
                <td>Completed</td>
                <td>09-24-22</td>
                <td>05-13-22</td>
                <td>54/54</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>137006</td>
                <td>How To Clear Off Your Loans</td>
                <td>Ongoing</td>
                <td>28-24-22</td>
                <td>-</td>
                <td>27/82</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>137001</td>
                <td>The Fundamentals Of Banking</td>
                <td>Ongoing</td>
                <td>03-24-22</td>
                <td>-</td>
                <td>45/82</td>
                <td><button>View</button></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </section>
    </section>
    <button><i class='fas fa-comment-dots'></i></button>
  </div>

  )
}

export default Dashboard