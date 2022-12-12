import Link from 'next/link'
import { Group, Button, Center } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { Layout } from '../../components/Layout'

const GropuDemo = () => {
  return (
    <Layout title="Group">
      <Group my="md" grow>
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>

      <Group direction="column" my="md" position="right">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>

      <Group my="md">
        <Button className="h-10" color="indigo">
          1
        </Button>
        <Button className="h-20" color="teal">
          2
        </Button>
        <Button className="h-32" color="orange">
          3
        </Button>
      </Group>

      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-600" />
        </Link>
      </Center>
    </Layout>
  )
}

export default GropuDemo
