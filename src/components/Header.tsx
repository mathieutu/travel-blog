import { Link } from 'gatsby'
import * as React from 'react'

type HeaderProps = {
  siteTitle: string,
}

export const Header = ({ siteTitle }: HeaderProps) => (
  <header className="bg-indigo-500 mb-6">
    <div
      className="mx-auto max-w-4xl px-6 py-4"
    >
      <h1>
        <Link to="/" className="text-white">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)
