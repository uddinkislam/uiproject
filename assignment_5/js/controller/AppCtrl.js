angular.module('shoppingCart').controller('appCtrl', ['$scope', 'productTypeService', function($scope, productTypeService){
     console.log(productTypeService.productTypes);                                                 
                                                      
    $scope.productTypes=productTypeService.productTypes;
    
    
 
    
    
    
     $scope.description={
        'title':    'iPhone 6S Promotion',
        'body':     'Get a iPad Pro and get 50% OFF on your new iPhone 6S'
                                                     
    };
}]);






                                                      /*
    $scope.ceoMsg={
        'title':    'Message from C.E.O Islamuddin Noor',
        'body':     'It gives me great pleasure to welcome you to the Zain Group website. These are exciting yet challenging times at Zain and I hope our portal creates an opportunity for our valued visitors around the world to learn more about our leading-edge operations, financial performance, strategies, services, sustainability initiatives, and values. This website is part of the external manifestation of our commitment to transparency and open communications to all our stakeholders as well as to the wider public interested in our activities. The telecom sector is one of the most dynamic in the world. Since the company’s inception in 1983, Zain has played a pioneering role in the development of telecommunications across the Middle East and Africa. Today, the company operates in eight countries serving over 45 million customers, offering a wide array of modern voice and data services to individuals and businesses alike. Zain works tirelessly to connect clients with their passions and loved ones. In an era of connectivity, memories are made virtually. Being the first company to introduce commercial GSM services in 1994 in Kuwait and across the region, Zain was also one of the first mobile operators to successfully launch 4G LTE services in 2011 initially in Saudi Arabia, and has subsequently introduced the state-of-the-art high speed service in six Zain country operations. Having successfully rebranded from MTC to Zain in 2007, the company has focused on the vision of creating a wonderful world, honing its strengths to provide its customers with the latest technologies and the most valuable packages. Zain is the most admired telecom brand in MENA, without question. The brand symbolizes progress, with the company leading the way in innovation on both the digital front and with respect to customer service and product offerings. Zain’s eight operations have over 12 million social media fans across all major channels and over the past three years, Zain YouTube channels have exceeded 200 million views. Good Corporate Governance and Sustainability, Transparency and Thought-Leadership are at the very core of Zain’s corporate values and all are reflected in every aspect of the company’s day-to-day operations. The company prioritizes its responsibility towards the communities it serves, supporting many youth-focused initiatives as well as launching programs that cater to education, health, environment, women, sports and other integral sectors in order to promote capacity building and positive living across its markets. In the face of a history of strong partnerships with global leaders in technology solutions, Zain aims to continue to pave the way to a bright future, and as the Smart City phenomenal gathers pace across the region, Zain intends to be a key facilitator of its further expansion and success. As the leading regional mobile operator focused on pioneering digital transformation, Zain will play a pivotal role in managing the connectivity and data integration of smart security, transportation, energy management, buildings and construction, as well as healthcare and education. I look forward to detailing all these and other developments at the appropriate time, and our website will remain the ideal source of updated information. Thank you for taking the time to visit the Zain Group website and I wholeheartedly welcome any constructive feedback you may have. Islamuddin Noor  CEO'
    };*/
    
    
    
    
