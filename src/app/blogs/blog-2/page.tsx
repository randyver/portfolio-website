"use client";

import { Blog } from "@/components/blogs";

export default function Content() {
  return (
    <Blog title="Practice Makes Perfect" date="23 August 2023">
      <p>
        “Practice makes perfect. After a long time of practicing, our work will
        become natural, skillful, swift, and steady.” ― Bruce Lee
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        scelerisque quis lacus non rhoncus. Morbi ac urna in ante hendrerit
        tincidunt. Nam in eros eros. Sed vel gravida justo. Fusce nec mi ex. Ut
        porttitor, nulla a vestibulum rhoncus, augue diam mattis neque, et
        interdum dui mi ac augue. In pulvinar, justo eu posuere dictum, nibh
        enim suscipit dolor, in efficitur lectus lectus vel augue. Sed mauris
        urna, lacinia in feugiat eget, consectetur sed urna. Fusce imperdiet
        cursus mi, at dictum metus tristique nec.
      </p>
    </Blog>
  );
}
