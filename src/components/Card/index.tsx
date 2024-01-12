type props = {
  url: string;
};
export function Card({ url }: props) {
  return (
    <div
      style={{
        background: `url(${url}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
      className="w-full max-w-[490px] h-[300px] flex items-end cursor-pointer border border-transparent hover:border hover:border-[#df0025] transition-all duration-700"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%)',
          zIndex: 1,
        }}
      />
    </div>
  );
}
