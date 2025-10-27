import './App.css';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>
              This is a simple application to showcase the use of UI components.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder='Enter your name' />
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
export default App;
