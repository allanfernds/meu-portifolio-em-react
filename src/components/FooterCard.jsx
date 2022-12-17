function Card2Row({
  title,
  text,
  icon,
  iconContainerClassName = "",
  hasBottomBorder,
  alt,
  link,
}) {
  return (
    <a target="blank" href={link}>
      <div
        className={`flex ${
          hasBottomBorder ? " pb-3 border-b border-[#E3E3E3]" : ""
        }`}
      >
        <div
          className={`hover:shadow-xl hover:shadow-blue-500/40 flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded-lg shadow-md p-1 ${iconContainerClassName}`}
        >
          <img src={icon} alt={alt} />
        </div>
        <div className="text-left ml-2.5">
          <p className="text-xs text-gray-600">{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
}
function FooterCard() {
  return (
    <div className="flex flex-col justify-center content-center gap-3 p-7 rounded-2xl bg-white">
      <Card2Row
        link="tel:75988927560"
        title="Phone"
        text="(75) 98892-7560"
        iconContainerClassName="bg-[#fcf4ff]"
        hasBottomBorder
        icon="https://img.icons8.com/external-sbts2018-outline-sbts2018/512/external-tel-basic-ui-elements-2.2-sbts2018-outline-sbts2018.png"
        alt="telefone alan fernandes de jesus feira de santana"
      />
      <Card2Row
        link="mailto:alanfernandes.mm@gmail.com"
        title="Email"
        text="alanfernandes.mm@gmail.com"
        iconContainerClassName="bg-[#fefaf0]"
        hasBottomBorder
        icon="https://img.icons8.com/material-outlined/512/new-post.png"
        alt="email alan fernandes de jesus feira de santana"
      />
      <Card2Row
        link="https://github.com/allanfernds"
        title="GitHub"
        text="@allanfernds"
        iconContainerClassName="bg-[#fefaf0]"
        hasBottomBorder
        icon="https://img.icons8.com/ios-glyphs/512/github.png"
        alt="github alan fernandes de jesus"
      />
      <Card2Row
        link="https://www.linkedin.com/in/alanfernds/"
        title="LinkedIn"
        text="Alan Fernandes "
        iconContainerClassName="bg-[#fefaf0]"
        icon="https://img.icons8.com/sf-regular/512/linkedin.png"
        alt="linkedin alan fernandes programador feira de santana"
      />
    </div>
  );
}

export { FooterCard, Card2Row };
