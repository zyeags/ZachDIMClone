import Milestones from "../components/Milestones.js";
import Ranks from "../components/Ranks.js";
import TrackedTriumphs from "../components/TrackedTriumphs.js";

export default function Progress() {
  return (
    <div>
      <Ranks />
      <TrackedTriumphs />
      <Milestones />
    </div>
  );
}
