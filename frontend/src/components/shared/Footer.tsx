import { FaDiscord, FaRedditAlien, FaGithub } from "react-icons/fa6";


const Footer = () => {
  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Spell DB", key: "item-1-4" },
      { label: "Feedback", key: "item-1-5" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];
  return (
    <div className="footer">
      <div className="footer-company-info">
        <div className="footer-img">
          <img src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/logo2.png" alt="aboba" />
          {/* <span>Made on React</span> */}
        </div>

        
       
      </div>
      <div className="footer-links">
        {links.map((col, index) => (
          <ul className={`col col-${index + 1}`} key={`col-${index}`}>
            {col.map((link, index) => (
              <li key={`link-${col}-${index}`}>{link.label}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className="SocialLinks">
        <a id="DiscordLink" href="https://discord.com/">
          <FaDiscord />
        </a>
        <a
          id="GitHubLink"
          href="https://github.com/Maksym-Perehinets/Arcane-Tavern-full-stack-site-that-organize-spells-for-TTRPG-game"
        >
          <FaGithub />
        </a>
        <a id="RedditLink" href="https://www.reddit.com/">
          <FaRedditAlien />
        </a>
      </div>
    </div>
  );
};

export default Footer;
