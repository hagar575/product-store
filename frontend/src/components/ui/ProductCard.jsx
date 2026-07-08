import { useState } from "react";
import { Box, Image, Heading, Text, HStack, IconButton, Icon, VStack, Input, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode.jsx";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useProductStore } from "../../store/product";
import { toaster } from "@/components/ui/toaster.jsx"
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogTitle, DialogRoot, DialogFooter} from "@/components/ui/dialog.jsx"

const ProductCard = ({ product }) => {
  const [formData, setFormData] = useState(product);

  const [open, setOpen] = useState(false);

  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");

  const {deleteProduct, updateProduct} = useProductStore()

  const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid)
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        duration: 3000,
        isClosable: true,
      });
      }
    }

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const {success, message} = await updateProduct(pid, updatedProduct)
    setOpen(false);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: "Product updated successfully.",
        type: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Box
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      transition='all 0.3s'
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
      bg={bgColor}
    >
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

      <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
          {product.name}
        </Heading>

        <Text fontSize='xl' fontWeight='bold' color={textColor} mb={4}>
          ${product.price.toFixed(2)}
        </Text>

        <HStack gap={2}>
          <IconButton aria-label="Edit product" colorPalette='blue' onClick={() => setOpen(true)}>
            <Icon as={FaRegEdit} />
          </IconButton>
          <IconButton aria-label="Delete product" colorPalette='red' onClick={() => handleDeleteProduct(product._id)}>
            <Icon as={FaRegTrashAlt} />
          </IconButton>
        </HStack>
      </Box>

      <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <VStack gap={4}>
              <Input placeholder="Product Name" name="name" value={formData.name || ""} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <Input placeholder="Product Price" name="price" type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})} />
              <Input placeholder="Product Image URL" name="image" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
            </VStack>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <Button onClick={() => handleUpdateProduct(product._id, formData)}>Update</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </Box>
  )
}

export default ProductCard
