import React from 'react'
import { Link } from 'gatsby'

import ImageRandom from './ImageRandom'

export default ({ data }) => (
  <article className="freelance" key={data.slug}>
    <Link to={`/freelances/${data.slug}`} className="freelance__link media" title={data.title}>
      <div className="freelance__thumb-box">
        <ImageRandom imageData={data} />
      </div>

      <div className="freelance__text">
        <h2 className="h3-like freelance__title">{data.title}</h2>
        <h3 className="freelance__prestation">{data.position}</h3>
        <p className="freelance__city mbn">
          <svg className="icon-location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" enableBackground="new 0 0 12 16">
            <g stroke="#705C76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
              <circle cx="6" cy="5.7" r="1.4"/>
              <path d="M10.9 5.8c0-2.8-2.2-5-4.9-5s-4.9 2.2-4.9 5c0 3.6 4.9 9.4 4.9 9.4s4.9-5.8 4.9-9.4z"/>
            </g>
          </svg>

          {data.city}
        </p>
      </div>
    </Link>
  </article>
)
