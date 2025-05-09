
export function ViewResumeButton() {
  return (
    <div className="mt-12 w-fit p-2 rounded-lg border border-green-500">
      <a
        className="inline-flex items-baseline leading-tight hover:text-green-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
        href="https://drive.google.com/file/d/1to0RpJds-AEk42TG6Qg6vr5MdIB7YVIZ/view?usp=drivesdk"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View Full Résumé (opens in a new tab)"
      >
        <span>
          View{" "}
          <span className="inline-block">
            Résumé
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </a>
    </div>
  )
}
