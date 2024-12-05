import styles from './ContactForm.module.css'
import { Button } from "@/components/ui/button"
import { Input, createListCollection, Textarea, Flex } from "@chakra-ui/react";
import {
  SelectContent,
  // SelectItem,
  // SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload"
import { HiUpload } from "react-icons/hi"
import {  RiArrowRightLine } from "react-icons/ri"

export default function ContactForm() {
  return (
    <form action="" className={styles.form}>
      <Input placeholder="Full name" name="text" />
      <Input placeholder="Email address" name="text" type="email" />
      <SelectRoot
        collection={createListCollection({ items: [] })}
        size="sm"
        name="services"
      >
        {/* <SelectLabel>Select framework</SelectLabel> */}
        <SelectTrigger>
          <SelectValueText placeholder="Services" />
        </SelectTrigger>
        <SelectContent>
          {/* {frameworks.items.map((movie) => (
            <SelectItem item={movie} key={movie.value}>
              {movie.label}
            </SelectItem>
          ))} */}
        </SelectContent>
      </SelectRoot>
      <SelectRoot
        collection={createListCollection({ items: [] })}
        size="sm"
        name="budget"
      >
        {/* <SelectLabel>Select framework</SelectLabel> */}
        <SelectTrigger>
          <SelectValueText placeholder="Your budget (USD)" />
        </SelectTrigger>
        <SelectContent>
          {/* {frameworks.items.map((movie) => (
            <SelectItem item={movie} key={movie.value}>
              {movie.label}
            </SelectItem>
          ))} */}
        </SelectContent>
      </SelectRoot>
      <Textarea
        name="about"
        size="lg"
        placeholder="Tell us about your project..."
      />
      <Flex basis={"100%"} padding={".5rem"} borderRadius="sm" alignItems={'center'} background={"#F5F6F7"}>
        <span style={{
          textWrap: 'nowrap'
        }}>
          Attach File
        </span>
      <FileUploadRoot alignItems={'flex-end'}>
        <FileUploadTrigger asChild>
          <Button variant="outline" p="2" size="sm">
            <HiUpload /> Upload file
          </Button>
        </FileUploadTrigger>
        <FileUploadList />
      </FileUploadRoot>
      </Flex>
      <Button backgroundColor={"#BD7500"}>
      Request a Quote  <RiArrowRightLine />
      </Button>
    </form>
  );
}
