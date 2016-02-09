require 'bundler'
Bundler.require()


#all the things in the text file
def get_lunches
  File.read('./data/lunch.txt').split(',')
end

#add a new thing to text file
def set_new_lunch(lunch)
    lunches = get_lunches()
    lunches.push(lunch)
    File.write('./data/lunch.txt', lunches.join(','))
end

#def random
#  lunches = get_lunches()
#  shuffle = lunches.shuffle
#  shuffle.sample
#end

#this gets a lunch
get '/' do
  @lunches = get_lunches()

  erb :index
end

#what to do with the lunch
#the NAME of the form on our index page is the param below
post '/lunches' do
  set_new_lunch( params[:lunch_wow] )
  redirect '/'
end
