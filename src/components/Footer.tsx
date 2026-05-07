export default function Footer() {
  const socialLinks = {
    github: "https://github.com/A7189",
    instagram: "https://www.instagram.com/pragaza.id/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpragaza-aji-narpati-790a10384%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnBvzAuWCkBwvIHoc318IDPpBwP6z7yDmn1IapFoz-0qboNVYSiNHjkc22mfE_aem_bva9VwXOGu5whG0ibhkzhQ&e=AUDB3bESHnYa22TiSRdF0bNvujbcynoxFL_wwQw6oklry6_5twprzgZ3mSv0N5hA6BsgOKgV0i4KVEPeSfqRAOpjAmCA338KE7czx9vm11unOvwWgb3DbAzBlQ"
  };

  return (
    <footer className="mt-20 border-t border-white/10 py-12 text-center text-gray-500">
      <p className="text-sm tracking-wide">
        &copy; {new Date().getFullYear()} Pragaza Aji Narpati. All rights reserved.
      </p>
      
      <div className="mt-6 flex justify-center gap-8 text-sm font-medium">
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-orange-500 transition-colors"
        >
          GitHub
        </a>
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-orange-500 transition-colors"
        >
          Instagram (R&D)
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-orange-500 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}