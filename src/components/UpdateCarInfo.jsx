"use client";
import React from "react";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  Select,
  TextField,
} from "@heroui/react";
import { FaCarOn } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateCarInfo = ({ carData }) => {
  const router = useRouter();
  const updateCarInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:5000/car/${carData._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData.token}`,
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    toast.success("Car Updated Successfully!👏", {
      duration: 4000,
    });
    router.refresh();
  };

  return (
    <div>
      <Modal>
        <Button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full shadow-[0_4px_25px_rgba(34,211,238,0.25)] active:scale-[0.99] transition-all duration-200 uppercase cursor-pointer">
          {" "}
          Update Car Info
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaCarOn />
                </Modal.Icon>
                <Modal.Heading>Update Car Info</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  You can not update car name, car type and seat capacity
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    onSubmit={updateCarInfo}
                    className="flex flex-col gap-4"
                  >
                    <TextField
                      className="w-full"
                      name="imageURL"
                      type="url"
                      variant="secondary"
                    >
                      <Label>Photo URL</Label>
                      <Input placeholder="Enter new image link" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="dailyRentPrice"
                      type="number"
                      variant="secondary"
                    >
                      <Label>Price Per Day</Label>
                      <Input placeholder={carData.dailyRentPrice} />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="pickupLocation"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Pickup Location</Label>
                      <Input placeholder={carData.pickupLocation} />
                    </TextField>

                    <TextField className="w-full" variant="secondary">
                      <Select
                        className="w-[256px]"
                        name="availabilityStatus"
                        placeholder="Select one"
                      >
                        <Label>Availability</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="available" textValue="Available">
                              Available
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item
                              id="unavailable"
                              textValue="Unavailable"
                            >
                              Unavailable
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </TextField>

                    <TextField
                      className="w-full"
                      name="description"
                      variant="secondary"
                    >
                      <Label>Description</Label>
                      <Input placeholder={carData.description} />
                    </TextField>
                    <div className="flex justify-around gap-15">
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        {" "}
                        Update
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateCarInfo;
