import styles from "./ContactForm.module.css";
import { Button } from "@/components/ui/button";
import { Input, createListCollection, Textarea, Flex } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  // SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";
import { RiArrowRightLine } from "react-icons/ri";

export default function ContactForm() {
  const services = createListCollection({
    items: [
      { value: "web", label: "Web Development" },
      { value: "mobile", label: "Mobile Development" },
      { value: "media", label: "Social media brandling/handling" },
      { value: "graphics", label: "Graphic Design" },
      { value: "rebranding", label: "Site Rebranding" },
      { value: "hire", label: "Hire for a position" },
      { value: "other", label: "Other: Specify below" },
    ],
  });
  const budget = createListCollection({
    items: [
      { value: "1", label: "below 500 USD" },
      { value: "2", label: "500 - 1000 USD" },
      { value: "3", label: "1000 - 2000 USD" },
      { value: "other", label: "Other: Specify below" },
    ],
  });
  return (
    <form action="" className={styles.form}>
      <Input placeholder="Full name" name="text" />
      <Input placeholder="Email address" name="text" type="email" />
      <SelectRoot collection={services} size="md" name="services">
        {/* <SelectLabel>Select framework</SelectLabel> */}
        <SelectTrigger>
          <SelectValueText placeholder="Services" />
        </SelectTrigger>
        <SelectContent>
          {services.items.map((service) => (
            <SelectItem item={service} key={service.value}>
              {service.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
      <SelectRoot
        collection={budget}
        size="md"
        name="budget"
      >
        {/* <SelectLabel>Select framework</SelectLabel> */}
        <SelectTrigger>
          <SelectValueText placeholder="Your budget (USD)" />
        </SelectTrigger>
        <SelectContent>
          {budget.items.map((b) => (
            <SelectItem item={b} key={b.value}>
              {b.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
      <Textarea
        name="about"
        size="lg"
        placeholder="Tell us about your project..."
      />
      <Flex
        basis={"100%"}
        padding={".5rem"}
        borderRadius="sm"
        alignItems={"center"}
        background={"#F5F6F7"}
      >
        <span
          style={{
            textWrap: "nowrap",
          }}
        >
          Attach File
        </span>
        <FileUploadRoot alignItems={"flex-end"}>
          <FileUploadTrigger asChild>
            <Button variant="outline" p="2" size="sm">
              <HiUpload /> Upload file
            </Button>
          </FileUploadTrigger>
          <FileUploadList />
        </FileUploadRoot>
      </Flex>
      <Button backgroundColor={"#BD7500"}>
        Request a Quote <RiArrowRightLine />
      </Button>
    </form>
  );
}
