import { Box, Text , Button } from '@chakra-ui/react'
import React from 'react'
import {HiPlusSm} from 'react-icons/hi'

const Title = () => {
  return (
    <Box
    display={'flex'}
    width={{'2xl' : '1864px'}}
    padding={{'2xl' : '24px 32px'}}
    alignItems={'center'}
    gap={{"2xl" : "8px"}}>

        {/* Title Box */}
        <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={{"2xl" : "8px"}}
        flex={'1 0 0'}>
            <Text
            fontFamily={'Chivo'}
            fontSize={'30px'}
            fontStyle={'normal'}
            fontWeight={'400'}
            lineHeight={'39.9px'}>
                Import Data
            </Text>
            <Text
            fontFamily={'Inter'}
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={'400'}
            lineHeight={'24px'}>
            Import data from the following tools in a few clicks.
            </Text>
        </Box>

        {/* Call to Action Button */}
        
            <Button
            size={'sm'}
            variant={'outline'}
            display={'flex'}
            height={'32px'}
            padding={'0px 12px'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'8px'}
            borderRadius={'6px'}
            border={'1px'}
            color={'gray.500'}
            >
                <Text
                color={'#11190C'}
                fontFamily={'inter'}
                fontSize={'14px'}
                fontStyle={'normal'}
                fontWeight={'600'}
                lineHeight={'20px'}
                >Call to Actions </Text>
                <Box color={'#000000'} ><HiPlusSm/></Box>
                
            </Button>
    

    </Box>
  )
}

export default Title