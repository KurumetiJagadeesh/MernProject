import React from 'react'
import Navbar from './Navbar'
import './cources.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <Navbar/>
    <img src="https://images.hindustantimes.com/img/2021/04/08/1600x900/KL_University_HT_1617871537419_1617871542598.jpg" alt="Aleq"  className='background' />
    <br/>
      <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <Link to="/daa" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Data Analysis &amp; Algorithms &#160;
        </div>

        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            11.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/mern" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          MERN Stack Web Development
        </div>

        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/mp" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Mathamatical Programming
        </div>

        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/os" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Operating Systems
        </div>

        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/cns" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Computer Networks
        </div>

        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/atfl" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Autometa Theory For formal Languages
        </div>
        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/pss" class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
          Problem Solving Skills
        </div>
        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/cctl" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Compitative Coding Training Level-1
        </div>

        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="pbbfsp" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Photograrhy Basics & Beyond From Smart Phone
        </div>

        <div class="ag-courses-item_date-box">
          Joined at:
          <span class="ag-courses-item_date">
            10.12.2022
          </span>
        </div>
      </Link>
    </div>

  </div>
</div>
    </>
  )
}
