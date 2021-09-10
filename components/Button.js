export default function Button({ title = 'Submit Resource', size = 'md' }) {
  return (
    <button
      className={`bg-primary text-white rounded ${
        size === 'md' && 'w-[12rem] h-[3.5rem]'
      }`}
    >
      {title}
    </button>
  )
}
