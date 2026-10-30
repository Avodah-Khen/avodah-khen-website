import { HONEYPOT_FIELD } from "@/lib/validation";

// Hidden anti-spam input. Kept off-screen (not display:none, which some bots skip),
// out of the tab order and away from screen readers and password managers.
export default function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
