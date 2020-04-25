import * as React from 'react'

export default function Login (props) {
  return (
    <div class='bg-darken10 viewport-half'>
        <div class='flex-parent flex-parent--center-main pt36'>
          <div class='flex-child bg-white round relative w600'>
            <div class='px24 py24'>
              <div class='txt-l mb12'>Modal title</div>
              <div class='txt-m'>
                <h2>Welcome! I don't know who you are.</h2>
                <a href="http://localhost:3003/api/v1/auth/strava">Login with Strava</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
