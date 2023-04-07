import React from 'react'
import CipharMap from './CipharMap/CipharMap'

function UserForm() {
  return (<>
    <div>
    <div class="about-me-box">
        <div class="top-row">
            <div class="left-header">About me</div>
            <div class="right-header">Edit</div>
        </div>
        <div class="input-box">
            <textarea class="about-text" placeholder="Add something about you." rows="4" disabled=""></textarea>
        </div>
    </div>
        <CipharMap/>
    </div>
    </>
  )
}

export default UserForm
