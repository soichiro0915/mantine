import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'
import { Button, Group } from '@mantine/core'
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react'

import { Layout } from '../../components/Layout'

const ButtonDemo = () => {
  return (
    <Layout title="button">
      <Group className='flex-col' position="center" >
        <Button
          classNames={{
            leftIcon: 'text-pink-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          press
        </Button>

        <Button mt="md">Click</Button>

        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-600" />
        </Link>
      </Group>
    </Layout>
  )
}

export default ButtonDemo
