#include <iostream>
using namespace std;
int main()
{
	int arr[]={10,30,40,60,70,75,90};
	int s=sizeof(arr)/sizeof(arr[0]);
	int left=0 ,right=s-1,mid,inp, found=0;
	//Taking input of data
	cout<<s<<endl;
	cout<<"Enter the searching data :- ";
	cin>>inp;
	while(left<=right)
	{
		mid=left+(right-left)/2;  //finding middle element
		if(arr[mid]==inp)
		{
			found=1;
			break;
		}
		if(arr[mid]<inp)
		{
			left=mid+1;
		}
		else
		{
			right=mid-1;
		}
	}
	if(found==1)
	{
		cout<<"Data is found at : "<<mid<<endl;
	}
	else
	{
		cout<<"Item not found";
	}
	return 0;
}
