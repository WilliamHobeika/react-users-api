const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href="https://instagram.com/williamhobeika"
        className="hover: rounded-md p-[10px] hover:bg-[#F4F4F5]"
      >
        <img src="/assets/icons/instagram.svg" width={20} height={20} />
      </a>
      <img
        src="/assets/images/separator.svg"
        width={20}
        height={20}
        className="-rotate-45"
      />
      <a
        href="https://github.com/WilliamHobeika"
        className="hover: rounded-md p-[10px] hover:bg-[#F4F4F5]"
      >
        <img src="/assets/icons/github.svg" width={20} height={20} />
      </a>
    </div>
  );
};

export default Socials;
